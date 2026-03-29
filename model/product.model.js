const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbconfig');

const Product = sequelize.define('products', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    project: {
        type: DataTypes.STRING,
        allowNull: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: true
    },
    overview: {
        type: DataTypes.TEXT,
        allowNull: true
    },

    // Arrays stored as JSON
    keyFeatures: {
        type: DataTypes.JSON,
        allowNull: true
    },
    projectGoals: {
        type: DataTypes.JSON,
        allowNull: true
    },
    technologiesUsed: {
        type: DataTypes.JSON,
        allowNull: true
    },
    lessonsLearned: {
        type: DataTypes.JSON,
        allowNull: true
    },
    challengesFaced: {
        type: DataTypes.JSON,
        allowNull: true
    },
    achievements: {
        type: DataTypes.JSON,
        allowNull: true
    },


    desktopImage: {
        type: DataTypes.STRING,
        allowNull: true
    },
    mobileImage: {
        type: DataTypes.STRING,
        allowNull: true
    },
    landingImage: {
        type: DataTypes.STRING,
        allowNull: true
    },    
    screenshot: {
        type: DataTypes.STRING,
        allowNull: true
    },


    githubLink: {
        type: DataTypes.STRING,
        allowNull: true
    },
    liveDemo: {
        type: DataTypes.STRING,
        allowNull: true
    }
});

module.exports = Product;
