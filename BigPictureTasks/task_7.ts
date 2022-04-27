// Problem

export type TreeNode = {
  id: string;
  children: Array<TreeNode>;
};

export function treeFlat(node: TreeNode): Array<string> {
  const result = getChildrenIds(node);
  return result;
}

// TODO
const getChildrenIds = node => {
  const result = [];
  result.push(node.id);

  (node.children || []).forEach(e => {
    result.push(e.id);
    e.children.forEach(e2 => {
      result.push(...getChildrenIds(e2));
    });
  });
  return result;
};

// Test

const data1: TreeNode = {
  id: '1',
  children: [
    { id: '2', children: [] },
    {
      id: '3',
      children: [{ id: '4', children: [] }]
    }
  ]
};

const expected1 = ['1', '2', '3', '4'];
const result1 = treeFlat(data1);

for (let i = 0; i < expected1.length; i++) {
  if (result1[i] !== expected1[i]) {
    console.error('Nope');
  }
}
