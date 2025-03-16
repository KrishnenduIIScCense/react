import axios from "axios";

const API_BASE_URL = "https://auth.parabole.ai:5010";

// Fetch all customers
export const getAllCustomers = async () => {
    return await axios.get(API_BASE_URL);
};

// Register a new customer
export const registerCustomer = async (customerData) => {
    return await axios.post(API_BASE_URL, customerData);
};

// Get a specific customer
export const getCustomer = async (customerName) => {
    return await axios.get(`${API_BASE_URL}/${customerName}`);
};

// Update an existing customer
export const updateCustomer = async (customerName, updateData) => {
    return await axios.patch(`${API_BASE_URL}/${customerName}`, updateData);
};

// Delete a customer
export const deleteCustomer = async (customerName) => {
    return await axios.delete(`${API_BASE_URL}/${customerName}`);
};

// Get customer admin details
export const getCustomerAdmin = async (customerName) => {
    return await axios.get(`${API_BASE_URL}/${customerName}/admin`);
};

// Register a customer admin
export const registerCustomerAdmin = async (customerName, adminData) => {
    return await axios.post(`${API_BASE_URL}/${customerName}/admin`, adminData);
};

// Delete a customer admin
export const deleteCustomerAdmin = async (customerName) => {
    return await axios.delete(`${API_BASE_URL}/${customerName}/admin`);
};
