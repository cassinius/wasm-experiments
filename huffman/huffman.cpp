#include <iostream>
#include <queue>
#include <map>
#include <climits> // for CHAR_BIT
#include <iterator>
#include <algorithm>
#include <chrono>

typedef std::chrono::high_resolution_clock Clock;
typedef std::chrono::milliseconds milliseconds;

using namespace std;
 
const int UniqueSymbols = 1 << CHAR_BIT;
const char* SampleString = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere";
 
typedef std::vector<bool> HuffCode;
typedef std::map<char, HuffCode> HuffCodeMap;
 
class INode
{
public:
    const int f;
 
    virtual ~INode() {}
 
protected:
    INode(int f) : f(f) {}
};
 
class InternalNode : public INode
{
public:
    INode *const left;
    INode *const right;
 
    InternalNode(INode* c0, INode* c1) : INode(c0->f + c1->f), left(c0), right(c1) {}
    ~InternalNode()
    {
        delete left;
        delete right;
    }
};
 
class LeafNode : public INode
{
public:
    const char c;
 
    LeafNode(int f, char c) : INode(f), c(c) {}
};
 
struct NodeCmp
{
    bool operator()(const INode* lhs, const INode* rhs) const { return lhs->f > rhs->f; }
};
 
INode* BuildTree(const int (&frequencies)[UniqueSymbols])
{
    std::priority_queue<INode*, std::vector<INode*>, NodeCmp> trees;
 
    for (int i = 0; i < UniqueSymbols; ++i)
    {
        if(frequencies[i] != 0)
            trees.push(new LeafNode(frequencies[i], (char)i));
    }
    while (trees.size() > 1)
    {
        INode* childR = trees.top();
        trees.pop();
 
        INode* childL = trees.top();
        trees.pop();
 
        INode* parent = new InternalNode(childR, childL);
        trees.push(parent);
    }
    return trees.top();
}
 
void GenerateCodes(const INode* node, const HuffCode& prefix, HuffCodeMap& outCodes)
{
    if (const LeafNode* lf = dynamic_cast<const LeafNode*>(node))
    {
        outCodes[lf->c] = prefix;
    }
    else if (const InternalNode* in = dynamic_cast<const InternalNode*>(node))
    {
        HuffCode leftPrefix = prefix;
        leftPrefix.push_back(false);
        GenerateCodes(in->left, leftPrefix, outCodes);
 
        HuffCode rightPrefix = prefix;
        rightPrefix.push_back(true);
        GenerateCodes(in->right, rightPrefix, outCodes);
    }
}
 
int main()
{
  Clock::time_point t0 = Clock::now();

  for ( int i = 0; i < 100000; ++i ) {
    
    // Build frequency table
    int frequencies[UniqueSymbols] = {0};
    const char* ptr = SampleString;
    while (*ptr != '\0')
        ++frequencies[*ptr++];
 
    INode* root = BuildTree(frequencies);
 
    HuffCodeMap codes;
    GenerateCodes(root, HuffCode(), codes);
    delete root;
 
    // for (HuffCodeMap::const_iterator it = codes.begin(); it != codes.end(); ++it)
    // {
    //     std::cout << it->first << " ";
    //     std::copy(it->second.begin(), it->second.end(),
    //               std::ostream_iterator<bool>(std::cout));
    //     std::cout << std::endl;
    // }

  }

  Clock::time_point t1 = Clock::now();
  milliseconds ms = std::chrono::duration_cast<milliseconds>(t1 - t0);
  
  cout << "100k iterations of huffman coding took " << ms.count() << " ms." << endl;

  return 0;
}