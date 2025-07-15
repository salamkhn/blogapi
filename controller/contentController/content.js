import { contentdata } from "../../models/content.model.js";
// create content function
export const createContent = async (req, res) => {
  const { content, tittle, subtittle, user, category, profile, comment } =
    req.body;

  try {
    //validation
    if (!content || !tittle || !subtittle) {
      return res.status(400).json({
        message: "all field is required",
        status: false,
      });
    }

    //save to dbs
    const contentDetail = new contentdata({
      content,
      tittle,
      subtittle,
      category,
      profile,
      comment,
      user: req.user,
    });

    contentDetail.save();

    // sending success response
    return res.status(200).json({
      message: "data is successfully saved to dbs",
      success: true,
      content: contentDetail,
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

// read allblogsContent function
export const showallblogsContent = async (req, res) => {
  try {
    const allcontent = await contentdata.find({});

    //if not present
    if (!allcontent) {
      return res.status(400).json({
        message: "not any blogcontent present",
        success: false,
      });
    }

    // if present show success response
    return res.status(200).json({
      message: "all content successfully loaded",
      allcontent,
      success: true,
    });
  } catch (err) {
    return res.status(500).json({
      message: "internal server error (catch of showallblogsContent)",
      error: err.message,
      success: false,
    });
  }
};

// get content by id
export const getcontentbyId = async (req, res) => {
  try {
    const id = req.params.id;

    const exist = await contentdata.findById(id);

    //validation
    if (!exist) {
      return res.status(400).json({
        message: "not any content found with this id",
        success: false,
      });
    }

    // success response if found
    return res.status(200).json({
      message: "this content found with given id",
      success: true,
      content: exist,
    });
  } catch (err) {
    return res.status(500).json({
      message: "internal server error (in getcontentbyId)",
      success: false,
    });
  }
};

//update content by id
export const updatecontentbyId = async (req, res) => {
  const { content, tittle, subtittle, user, category, profile, comment } =
    req.body;
  const id = req.params.id;
  console.log("id :", id);
  try {
    const exist = await contentdata.findByIdAndUpdate(
      id,
      {
        content,
        tittle,
        subtittle,
        category,
        profile,
        comment,
        user: req.user,
      },
      {
        new: true,
      }
    );

    console.log("exist :", exist);

    //validation
    if (!exist) {
      return res.status(400).json({
        message: "content with this id  not found",
        success: false,
      });
    }

    // if find than update it's
    return res.status(201).json({
      message: "content updated successfully",
      success: true,
    });
  } catch (err) {
    return res.status(500).json({
      message: "internal server error (in updatecontentbyId))",
      error: err.message,
      success: false,
    });
  }
};

// delete content by id
export const deletecontentbyId = async (req, res) => {
  const id = req.params.id;

  try {
    const deleted = await contentdata.findByIdAndDelete(id);

    //validation
    if (!deleted) {
      return res.status(400).json({
        message: "content not exist with this id",
        success: false,
      });
    }

    //success response
    return res.status(200).json({
      message: "content with this id deleted successfully",
      success: true,
    });
  } catch (err) {
    return res.status(500).json({
      message: "internal server error in (deleteContent)",
      success: false,
      error: err.message,
    });
  }
};
