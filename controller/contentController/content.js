import { contentdata } from "../../models/content.model.js";

export const contentFunction = async (req, res) => {
  const { content, tittle, subtittle } = req.body;

  try {
    //validation
    if (!content || !tittle || !subtittle) {
      return res.status(400).json({
        message: "all field is required",
        status: false,
      });
    }

    //save to dbs
    await contentdata.create({
      content,
      tittle,
      subtittle,
    });

    // sending success response
    return res.status(200).json({
      message: "data is successfully saved to dbs",
      success: true,
    });
  } catch (err) {
    // server error in catch
    res.status(500).json({
      message: "internal server error (content catch)",
      success: false,
      error: err.message,
    });
  }
};
