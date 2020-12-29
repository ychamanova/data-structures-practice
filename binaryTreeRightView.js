var rightSideView = function (root) {
    if (!root) return [];

    let q = [];
    q.push(root);
    let levCounter = 0;
    let res = [];

    while (q.length) {

        let items = [];
        let nextLevel = [];

        while (q.length) {
            let n = q.shift();
            items.push(n.val);
            if (n.left) nextLevel.push(n.left);
            if (n.right) nextLevel.push(n.right);
        }

        res.push(items);
        items = [];
        q = nextLevel;
    }
    let leftView = [];
    for (let i = 0; i < res.length; i++) {
        let last = res[i].pop();
        leftView.push(last);
    }
    return leftView;
};