const Sequelize = require('sequelize')
const sequelize = require("../database")

const Comment = sequelize.define("comment", {
    id : {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    contain: {
        type: Sequelize.STRING,
        allowNull: false
    },
    date: {
        type: Sequelize.DATE,
        allowNull: false
    },
    msgId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    authorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    authorName: {
        type: Sequelize.STRING,
        allowNull: false
    }   
}, {
    timestamps: false,
    freezeTableName: true
})

module.exports = Comment;