function renderTaskLists(list: Array<string>) {
    
}

function createSidebar() {
    const sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');

    const dueToday = document.createElement('p');
    dueToday.textContent = "Due Today";
    dueToday.classList.add('sidebar-header');

    const listsHeader = document.createElement('p');
    listsHeader.textContent = "Lists";
    listsHeader.classList.add('sidebar-header');

    const lists = document.createElement('ul');
    lists.classList.add('task-lists');

    renderTaskLists([]);

    const addNewListBtn = document.createElement('li');
    addNewListBtn.textContent = "New List";
    addNewListBtn.classList.add('add-new-list-btn', 'task-lists-item');

    lists.append(addNewListBtn);

    sidebar.append(dueToday, listsHeader, lists);

    return sidebar;
}

export { createSidebar };