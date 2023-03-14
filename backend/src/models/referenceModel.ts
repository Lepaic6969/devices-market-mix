// Description: This file contains the reference sequelize model
// Author: Sebastián Gámez Ariza

// Import the sequelize instance
import devicesDatabase from '../database/devicesDatabase';

// Import the sequelize library
import { DataTypes } from 'sequelize';

// Import the device model
import DeviceModel from './deviceModel';

// Create the reference model
const ReferenceModel = devicesDatabase.define('Reference', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, { timestamps: false, tableName: 'references' }
);

// Export the reference model
export default ReferenceModel;
