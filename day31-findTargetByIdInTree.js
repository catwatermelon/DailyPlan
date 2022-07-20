// 根据id递归找到树结构符合的值并计算得到完整链路
const data = [
    {
        id: '1000',
        name: '深圳',
        children: [
            {
                id: '1001',
                name: '宝安',
                children: []
            },
            {
                id: '1002',
                name: '南山',
                children: [
                    {
                        id: '1012',
                        name: '粤海街道',
                        children: [
                            {
                                id: '1112',
                                name: '阿里中心',
                                children: []
                            },
                            {
                                id: '1212',
                                name: '深圳湾人才公园',
                                children: []
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: '2000',
        name: '广州',
        children: [
            {
                id: '2001',
                name: '越秀区',
                children: [
                    {
                        id: '2011',
                        name: '人民公园'
                    }
                ]
            },
            {
                id: '2002',
                name: '天河区',
                children: []
            }
        ]
    }
];

const findTargetById = (data, id) => {
    let retPath = [], retTarget = null;
    const dfs = (tree, id, path) => {
        const lens = tree.length;
        for (let i = 0; i < lens; ++i) {
            if (tree[i].id === id) { // hit
                retTarget = tree[i];
                retPath = path.concat(tree[i].id);
                return;
            } else {
                tree[i].children && dfs(tree[i].children, id, path.concat(tree[i].id));
            }
        }
    }
    dfs(data, id, []);
    return {
        o: retTarget,
        path: retPath.join('->')
    };
}

// console.log(findTargetById(data, '1212'));

const findTargetById2 = (data, id) => {
    let path = [];
    while (data.length) {
        const node = data.shift();
        path.push(node.id);
        if (node.id === id) { // hit
            return {
                o: node,
                path
            };
        } else {
            const children = node.children || [];
            if (children && children.length) {
                if (data.length === 0) path = [node.id]
                data.unshift(...children);
            } else { // 到底了pop
                path.pop();
            }
        }
    }
    return {
        o: null,
        path: []
    };
}

console.log(findTargetById2(data, '2002'));
