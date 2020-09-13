const users = [     
    {
        _id: "1",
        firstName: "Max",
        lastName: "Wilson",
        email: "wilson@gmail.com",
        phoneNumber: "0123456789"
    },
    {
        _id: "2",
        firstName: "Liam",
        lastName: "Smith",
        email: "smith@gmail.com",
        phoneNumber: "0123456789"
    },
    {
        _id: "3",
        firstName: "Noah",
        lastName: "Brown",
        email: "brown@gmail.com",
        phoneNumber: "0123456789"
    },
    {
        _id: "4",
        firstName: "Oliver",
        lastName: "Jones",
        email: "jones@gmail.com",
        phoneNumber: "0123456789"
    }
];

const assignments = [
    {
        _id: "1",
        name: "eletric guitar",
        date: "01/01/2020"
    }
];

const contacts = [    
    {
        _id: "1",
        firstName: "Max",
        lastName: "Wilson",
        email: "wilson@gmail.com",
        phoneNumber: "0123456789"
    },
    {
        _id: "2",
        firstName: "Liam",
        lastName: "Smith",
        email: "smith@gmail.com",
        phoneNumber: "0123456789"
    },
    {
        _id: "3",
        firstName: "Noah",
        lastName: "Brown",
        email: "brown@gmail.com",
        phoneNumber: "0123456789"
    },
    {
        _id: "4",
        firstName: "Oliver",
        lastName: "Jones",
        email: "jones@gmail.com",
        phoneNumber: "0123456789"
    }
];

const teams = [
    [    
        {
            _id: "1",
            firstName: "Max",
            lastName: "Wilson",
            email: "wilson@gmail.com",
            phoneNumber: "0123456789"
        },
        {
            _id: "2",
            firstName: "Liam",
            lastName: "Smith",
            email: "smith@gmail.com",
            phoneNumber: "0123456789"
        },
        {
            _id: "3",
            firstName: "Noah",
            lastName: "Brown",
            email: "brown@gmail.com",
            phoneNumber: "0123456789"
        },
        {
            _id: "4",
            firstName: "Oliver",
            lastName: "Jones",
            email: "jones@gmail.com",
            phoneNumber: "0123456789"
        }
    ]
];

const medias = [
    {
        _id: "1",
        title: "nameTitle",
        author: "Jack",
        description: "des"
    },
    {
        _id: "2",
        title: "two title",
        author: "two",
        description: "des two"
    }
];

export function getUsers() {
    return users;
}

export function getAssignments() {
    return assignments;
}

export function getContacts() {
    return contacts;
}

export function getTeam() {
    return teams[0]; 
}
