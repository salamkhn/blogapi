import { view } from "../../models/viewsCount.model.js";

// view function
export const viewFunction = async (req, res) => {
  const { views } = req.body;

  try {
    //validation
    if (!views) {
      return res.status(400).json({
        message: "view (in number is required)",
        success: false,
      });
    }

    //saving to dbs
    await view.create({ views });

    //successResponse
    return res.status(201).json({
      message: "view data is successfully saved",
      view,
      success: true,
    });
  } catch (err) {
    return res.status(500).json({
      message: "internal server error in catch (view)",
      success: false,
      error: err.message,
    });
  }
};
