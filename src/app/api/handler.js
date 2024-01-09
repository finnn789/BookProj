const User = require('../../../config/database')['development'];
export default async function getUsers(req, res) {
 if (req.method === 'GET') {
    try {
      const users = await User.findAll();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch users' });
    }
 } else {
    res.status(405).json({ message: 'Method not allowed' });
 }
}