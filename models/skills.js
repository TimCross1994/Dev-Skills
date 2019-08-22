const devSkills = [
    {skill: "Typing"},
    {skill: "White Boarding"},
    {skill: "Music Selection"},
    {skill: "Teaching"}
];

module.exports = {
    getAll,
    deleteOne,
    getOne,
    createNewSkill
};

function getOne(id) {
    return devSkills[id];
}

function getAll() {
    return devSkills; 
}
function deleteOne(id) {
    devSkills.splice(id,1)
}
function createNewSkill(skill) {
    devSkills.push(skill)
}