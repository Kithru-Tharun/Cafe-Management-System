const express = require("express");
const menuItemRouter = express.Router();

const {
    addmenuItem,
    getAllmenuItems,
    getOnemenuItem,
    updatemenuItem,
    deletemenuItem,
} = require("../controller/menuItem.controller");

const menuAllRoutes = (upload) => {
    menuItemRouter.post('/create', upload.single("menuItemImage"), addmenuItem);
    menuItemRouter.get('/menuItems', getAllmenuItems);
    menuItemRouter.get('/menuItem/:id', getOnemenuItem);
    menuItemRouter.patch('/menuItemUpdate/:id', upload.single("menuItemImage"), updatemenuItem);
    menuItemRouter.delete('/deletemenuItem/:id', deletemenuItem);

    return menuItemRouter
}

module.exports = menuAllRoutes;