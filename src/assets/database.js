export const organizations = [
    {
        id: 1,
        name: "Crossroads",
        assigned_number: "+13343104351",
        organization_type: "crossroads",
        address: "160 Dundas Street",
        city: "Toronto",
        province: "Ontario",
        postalCode: "L9G 4H7",
        country: "Canada",
        website: "https://crossroads.ca",
        phoneNumber: "+1 289(346)-7829",
        logoImage: "https://google.com",
        numOfPrayerPartners: 28,
        created_at: "2020-08-20",
        updated_at: "2020-08-20",
        leadPastorName: "Oscar Embaobar",
        carePastorName: "Leo Messi",
        carePastorEmail: "david@email.com",
        carePastorPhoneExt: "121",
        assignedNumber: "+13658891244",
        prayerPartnersCount: 12,
        serviceStartTimes: "9:00, 12:00",
        churchPrograms: "The power of the Blood",
        resources: []
    },
    {
        id: 2,
        name: "RCCG",
        assigned_number: "+232457554",
        city: "Hamilton",
        organization_type: "church",
        province: "Ontario",
        country: "Canada",
        logoImage: "https://google.com",
        numOfPrayerPartners: 68,
        created_at: "2020-08-20",
        updated_at: "2020-08-20",
        resources: []
    },
    {
        id: 3,
        name: "Chosen generation",
        assigned_number: "+123456789",
        city: "Ottawa",
        organization_type: "charity",
        province: "Ontario",
        country: "Canada",
        logoImage: "https://google.com",
        numOfPrayerPartners: 3,
        created_at: "2020-08-20",
        updated_at: "2020-08-20",
        resources: []
    },
    {
        id: 4,
        name: "Restoration House",
        assigned_number: "+12894789",
        city: "New Brunswick",
        organization_type: "christian non-profit",
        province: "Ontario",
        country: "Canada",
        logoImage: "https://google.com",
        numOfPrayerPartners: 10,
        created_at: "2020-08-20",
        updated_at: "2020-08-20",
        resources: []
    },
    {
        id: 5,
        name: "City of David",
        assigned_number: "+156897646",
        city: "Calgary",
        organization_type: "christian organization",
        province: "Ontario",
        country: "Canada",
        logoImage: "https://google.com",
        numOfPrayerPartners: 103,
        created_at: "2020-08-20",
        updated_at: "2020-08-20",
        resources: []
    },
    {
        id: 6,
        name: "Seven days methodist"
    },
    {
        id: 7,
        name: "Deeper Life"
    }
]


export const users = [
    {
        id: "01",
        email: "david@email.com",
        userName: "quisathedesginer",
        firstName: "Quisa",
        lastName: "Designer",
        created_at: "2022-12-25",
        updated_at: "2022-12-25",
        passwordHash: "$ojoifhiegg9238rbf23hef34342",
        churchId: 5,
        permissions: ['viewDashboard'],
        roles: ['admin'],
        lastLogin: "2023-01-01"

    },

    {
        id: "02",
        email: "ezedave@gmail.com",
        userName: "daveeze",
        firstName: "Dave",
        lastName: "Eze",
        created_at: "2022-11-20",
        updated_at: "2022-11-20",
        passwordHash: "$5gjh34j5bj25n6j65646",
        churchId: 3,
        permissions: ['takeCalls'],
        roles: ['prayerPartner'],
        lastLogin: "2023-01-01"

    },
    {
        id: "03",
        email: "joel@gmail.com",
        userName: "joeltheoverseer",
        firstName: "Joel",
        lastName: "Overseer",
        created_at: "2020-04-09",
        updated_at: "2022-09-17",
        passwordHash: "$ojoifhiegg9238rbf23hef34342",
        churchId: 3,
        permissions: ['takeCalls', 'viewDashboard'],
        roles: ["superadmin"],
        lastLogin: "2023-01-01"

    },

    {
        id: "04",
        email: "dave@gmail.com",
        userName: "davethetester",
        firstName: "Dave",
        lastName: "Tester",
        created_at: "2022-11-20",
        updated_at: "2022-11-20",
        passwordHash: "$5gjh3432834yj5bj25n6j65646",
        churchId: 2,
        permissions: ['takeCalls', 'viewDashboard', 'editDashboard'],
        roles: ["ultimatesuperadmin"],
        lastLogin: "2023-01-01"

    },

]

export const roles = [
    {
        id: "1",
        title: "ultimatesuperadmin",
        description: "The ultimate super user admin",
        created_at: "2020-04-18",
        updated_at: "2021-07-10",
    },
    {
        id: "2",
        title: "superadmin",
        description: "The super admin",
        created_at: "2020-04-18",
        updated_at: "2021-07-10",
    },
    {
        id: "3",
        title: "admin",
        description: "Each church should have an admin",
        created_at: "2020-04-18",
        updated_at: "2021-07-10",
    },
    {
        id: "4",
        title: "prayerPartner",
        description: "Someone that prays for callers",
        created_at: "2020-04-18",
        updated_at: "2021-07-10",
    }
]