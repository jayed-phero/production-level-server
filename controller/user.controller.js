const users = require('../public/user.json');
const fs = require('fs');


module.exports.getRandomUser = (req, res) => {
    const usersData = users;
    const randomData = Math.floor(Math.random() * usersData.length);
    const randomUser = usersData[randomData];
    res.json(randomUser);
}


module.exports.getAllUser = (req, res) => {
    const userData = users
    const { limit } = req.query;
    if (limit) {
        const data = userData.slice(0, limit)
        res.send(data)
    }
    else {
        res.send(userData)
    }

}


module.exports.saveUser = (req, res) => {
    const usersData = users;
    const newUser = {
        id: Number(usersData.length + 1),
        gender: req.body.gender,
        name: req.body.name,
        contact: req.body.contact,
        address: req.body.address,
        photoUrl: req.body.photoUrl,
    };

    usersData.push(newUser);
    
    // fs.writeFileSync('./public/user.json', JSON.stringify(usersData));
    // fs.writeFileSync(filePath, JSON.stringify(usersData));

    return res.status(201).send({
        data: newUser,
        newAllUser: usersData
    });
}

module.exports.updateUser = (req, res) => {
    const usersData = users;
    const userId = req.params.id;
    const user = usersData.find(user => user.id === Number(userId));

    if (!user) {
        return res.status(404).send('User not found');
    }
    else {
        if (req.body.name) {
            user.name = req.body.name;
        }
        if (req.body.contact) {
            user.number = req.body.contact;
        }
        if (req.body.photoUrl) {
            user.location = req.body.photoUrl;
        }
        if (req.body.address) {
            user.address = req.body.address;
        }
        if (req.body.gender) {
            user.gender = req.body.gender;
        }

        // fs.writeFileSync('../public/user.json', JSON.stringify(users));
        res.send(user);
    }

}



module.exports.bulkUpdate = (req, res) => {
    const usersData = users;

    const bulkUsers = req.body;

    for (const update of bulkUsers) {

        const user = usersData.find(user => user.id === update.id);
        if (user) {
            console.log("blul")
            continue;
        }


        if (update.name) {
            user.name = update.name;
        }
        if (update.contact) {
            user.number = update.contact;
        }
        if (update.photoUrl) {
            user.location = update.photoUrl;
        }
        if (update.address) {
            user.address = update.address;
        }
        if (update.gender) {
            user.gender = update.gender;
        }
    }

    //   fs.writeFileSync('../public/users.json', JSON.stringify(users));

    res.send(bulkUsers);
}


module.exports.deleteUser = (req, res) => {
    const usersData = users;
    const id = req.params.id;
    const newUserData = usersData.filter(user => user.id !== Number(id));

    if (Number(id) !== -1) {
        res.send(newUserData)
    } else {
        res.status(404).json({ error: 'User not found' });
    }
};