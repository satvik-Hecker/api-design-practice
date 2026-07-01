import dotenv from 'dotenv';
import mongoose from 'mongoose';

import connectDB from '../src/config/db.js';
import User from '../src/models/User.js';
import dns from "node:dns/promises";

dotenv.config();
dns.setServers(["1.1.1.1", "1.0.0.1"]);

const seedAdmin = async () => {
    try {
        await connectDB();

        const existingAdmin = await User.findOne({ email: process.env.ADMIN_EMAIL });
        if (existingAdmin) {
            console.log('Admin user already exists');
            return;
        }

        if (!process.env.ADMIN_EMAIL || !process.env.ADMIN_PASSWORD) {
            console.log("Missing ADMIN_EMAIL or ADMIN_PASSWORD in .env");
            process.exit(1);
        }

        const adminUser = new User({
            email: process.env.ADMIN_EMAIL,
            password: process.env.ADMIN_PASSWORD,
            role: 'admin',
        });
        await adminUser.save();
        console.log('Admin user created successfully');
        process.exit(0);
    } catch (error) {
        console.error('Error creating admin user:', error);
        process.exit(1);
    }
};

seedAdmin();