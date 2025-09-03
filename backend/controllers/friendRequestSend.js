const FriendRequest = require('../models/friendRequest');

const sendRequestHandler = async (req, res) => {
  try {
    const { to } = req.body;           // receiver ID
    const from = req.user;         // sender ID from auth middleware

    if (to.toString() === from.toString()) {
      return res.status(400).json({ message: "You can't send a friend request to yourself." });
    }

    // Check if a friend request already exists
    const existingRequest = await FriendRequest.findOne({
      from,
      to
    });

    if (existingRequest) {
      return res.status(400).json({ message: 'Friend request already sent.' });
    }

    const request = await FriendRequest.create({
      from,
      to,
    });

    res.status(201).json({
      message: 'Friend request sent successfully.',
      request
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error.' });
  }
};

module.exports = sendRequestHandler;
