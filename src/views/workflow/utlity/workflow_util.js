const getGroups = (groupsStr, allGroups) => {
    return allGroups.filter(i => groupsStr.includes(i.id));
}

const getGroup = (id, items) => {
    console.log(id, "id");
    return items.find(i => id === (i.id));
}

export default {
    getGroups,
    getGroup
}