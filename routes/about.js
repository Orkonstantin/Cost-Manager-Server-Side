module.exports = (req,res) => {
    const developers = [
        {
            firstname: 'or',
            lastname: 'konstantin',
            id: 315903294,
            email: 'kon3101@gmail.com'
        },
        {
            firstname: 'almog',
            lastname: 'levi',
            id: 205982465,
            email: 'almoglevi71@gmail.com'
        },
        {
            firstname: 'chen',
            lastname: 'toaff',
            id: 207686114,
            email: 'toaff100@gmail.com'
        }
    ];

    res.json(developers);
};