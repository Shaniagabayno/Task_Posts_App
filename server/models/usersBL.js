const User = require("./usersModel");

const getallUsers = async () => {
	let user = await User.find({});
	return user;
};

const getUser = async (id) => {
	let data = await User.findById(id);
	return data;
};

const addUser = async (obj) => {
	let user = new User(obj);
	await user.save();
};

const updateUser = async (id, obj) => {
	await User.findByIdAndUpdate(id, {
		Name: obj.Name,
		Email: obj.Email,
		Street: obj.Street,
		City: obj.City,
		Zipcode: obj.Zipcode,
		Posts: obj.Posts,
		Tasks: obj.Tasks,
	});
};

const deleteUser = async (id) => {
	await User.findByIdAndDelete(id);
};

module.exports = { getallUsers, getUser, addUser, updateUser, deleteUser };
