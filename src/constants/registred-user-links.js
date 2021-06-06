export default [
    {
        path: "/",
        name: "home",
    },
    {
        path: "/pharmacies",
        name: "Pharmacies",
    },
    {
        path: "/medications",
        name: "Medications",
    },
    {
        path: "/registederuser/" + localStorage.getItem("id"),
        name: "user-profile",
    },
    {
        path: "/logout",
        name: "logout",
    },

];
