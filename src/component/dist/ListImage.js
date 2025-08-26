"use strict";
exports.__esModule = true;
var React = require("react");
var ImageList_1 = require("@mui/material/ImageList");
var ImageListItem_1 = require("@mui/material/ImageListItem");
var ImageListItemBar_1 = require("@mui/material/ImageListItemBar");
var ListSubheader_1 = require("@mui/material/ListSubheader");
var IconButton_1 = require("@mui/material/IconButton");
var Info_1 = require("@mui/icons-material/Info");
var material_1 = require("@mui/material");
var dailog_1 = require("./dailog");
var icons_material_1 = require("@mui/icons-material");
var style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 100,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
};
function TitlebarImageList() {
    return (React.createElement(ImageList_1["default"], null,
        React.createElement(ImageListItem_1["default"], { key: "Subheader", cols: 5 },
            React.createElement(ListSubheader_1["default"], { component: "div" }, "December")),
        itemData.map(function (item) { return (React.createElement(ImageListItem_1["default"], { key: item.img },
            React.createElement("img", { srcSet: item.img + "?w=248&fit=crop&auto=format&dpr=2 2x", src: item.img + "?w=248&fit=crop&auto=format", alt: item.title, loading: "lazy" }),
            React.createElement(ImageListItemBar_1["default"], { title: item.title, subtitle: item.author, actionIcon: React.createElement(IconButton_1["default"], { sx: { color: "rgba(255, 255, 255, 0.54)" }, "aria-label": "info about " + item.title },
                    React.createElement(Info_1["default"], { onClick: function (item) { return console.log(item); } })) }))); })));
}
exports["default"] = TitlebarImageList;
var showImage = function (_a) {
    var props = _a.props;
    var _b = React.useState(false), open = _b[0], setOpen = _b[1];
    var handleOpen = function () { return setOpen(true); };
    var handleClose = function () { return setOpen(false); };
    return (React.createElement(material_1.Dialog, { maxWidth: "sx", open: open, onClose: handleClose, PaperComponent: dailog_1["default"], "aria-labelledby": "draggable-dialog-title", key: item.img },
        React.createElement(material_1.DialogTitle, { style: { cursor: "move" }, id: "draggable-dialog-title" }, "Insert"),
        React.createElement(IconButton_1["default"], { "aria-label": "fingerprint", color: "error", onClick: handleClose, sx: function (theme) { return ({
                position: "absolute",
                right: 8,
                top: 8,
                color: theme.palette.grey[500]
            }); } },
            React.createElement(icons_material_1.Cancel, null)),
        React.createElement(material_1.DialogContent, { dividers: true },
            React.createElement(material_1.Stack, { spacing: { xs: 1, sm: 1, p: 1 }, direction: "row", useFlexGap: true, sx: { flexWrap: "wrap" } },
                React.createElement("img", { srcSet: item.img + "?w=248&fit=crop&auto=format&dpr=2 2x", src: item.img + "?w=248&fit=crop&auto=format", alt: item.title, loading: "lazy" })))));
};
var itemData = [
    {
        img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
        title: "Breakfast",
        author: "@bkristastucchio",
        rows: 2,
        cols: 2,
        featured: true
    },
    {
        img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
        title: "Burger",
        author: "@rollelflex_graphy726"
    },
    {
        img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
        title: "Camera",
        author: "@helloimnik"
    },
    {
        img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
        title: "Coffee",
        author: "@nolanissac",
        cols: 2
    },
    {
        img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
        title: "Hats",
        author: "@hjrc33",
        cols: 2
    },
    {
        img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
        title: "Honey",
        author: "@arwinneil",
        rows: 2,
        cols: 2,
        featured: true
    },
    {
        img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
        title: "Basketball",
        author: "@tjdragotta"
    },
    {
        img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
        title: "Fern",
        author: "@katie_wasserman"
    },
    {
        img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
        title: "Mushrooms",
        author: "@silverdalex",
        rows: 2,
        cols: 2
    },
    {
        img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
        title: "Tomato basil",
        author: "@shelleypauls"
    },
    {
        img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
        title: "Sea star",
        author: "@peterlaster"
    },
    {
        img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
        title: "Bike",
        author: "@southside_customs",
        cols: 2
    },
];
