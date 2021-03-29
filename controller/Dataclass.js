const datamodel = require("../Model/User");

exports.getalldata = async (req, res) => {
  try {
    const alldata = await datamodel.find();
    res.status(200) = json({ success: true, msg: alldata });
  } catch (error) {
    res.status(400) = json({ success: false });
  }
};

exports.getsingledata = async (req, res) => {
  try {
    const singledata = await datamodel.findbyId(req.params.id);
    res.status(200) = json({ success: true, msg: singledata });
  } catch (error) {
    res.status(400) = json({
      success: false,
    });
  }

  exports.newdata = async (req, res) => {
    try {
      const datacreation = await datamodel.create( req.body);
      res.status(200) = json({ success: true, msg: datacreation });
    } catch (error) {
      res.status(400) = json({ success: false });
    }
  };

  exports.updatedata = async (req, res) => {
    try {
      const dataupdate = await datamodel.findbyIdandupdate(
        req.params.id,
        req.body
      );
    } catch (error) {
      res.status(400) = json({ success: false });
    }
  };

  exports.deletedata = async (req, res) => {
    try {
      const removedata = await datamodel.findbyIdanddelete(req.param.id);
      res.status(200) = json({
        success: true,
        msg: deletedata,
      });
    } catch (error) {
      res.staus(400) = json({ success: false });
    }
  };
};
