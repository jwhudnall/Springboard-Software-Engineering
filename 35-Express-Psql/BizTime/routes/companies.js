const express = require("express");
const router = express.Router();
const db = require("../db");
const ExpressError = require("../expressError");
const slugify = require("slugify");

router.get("/", async (req, res, next) => {
  try {
    const results = await db.query("SELECT code, name FROM companies");
    return res.json({ companies: results.rows });
  } catch (e) {
    return next(e);
  }
});

router.get("/:code", async (req, res, next) => {
  try {
    const { code } = req.params;
    const companies = await db.query(
      "SELECT code, name, description FROM companies WHERE code=$1",
      [code]
    );
    const invoices = await db.query("SELECT * FROM invoices WHERE comp_code=$1", [code]);
    if (companies.rowCount === 0) {
      throw new ExpressError(`Invalid company code: ${code}`, 404);
    }
    const { name, description } = companies.rows[0];
    return res.json({ company: { code, name, description, invoices: invoices.rows } });
  } catch (e) {
    return next(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { name, description } = req.body;
    if (!name || !description) {
      throw new ExpressError("Request body requires 'name' and 'description' arguments.", 400);
    }
    const code = slugify(name, { lower: true, remove: /[*+~.()'"!:@]/g });
    const results = await db.query(
      "INSERT INTO companies (code, name, description) VALUES ($1, $2, $3) RETURNING code, name, description",
      [code, name, description]
    );
    return res.status(201).json({ company: results.rows[0] });
  } catch (e) {
    return next(e);
  }
});

router.put("/:code", async (req, res, next) => {
  try {
    const { code } = req.params;
    const { name, description } = req.body;
    if (!name || !description) {
      throw new ExpressError("Request body requires 'name' and 'description' arguments.", 400);
    }
    const results = await db.query(
      `UPDATE companies SET name=$1, description=$2 WHERE code=$3 RETURNING code, name, description`,
      [name, description, code]
    );
    if (results.rowCount === 0) {
      throw new ExpressError(`Company with code '${code}' not found.`, 404);
    }
    return res.json({ company: results.rows[0] });
  } catch (e) {
    return next(e);
  }
});

router.delete("/:code", async (req, res, next) => {
  try {
    const { code } = req.params;
    const results = await db.query("DELETE FROM companies WHERE code=$1", [code]);
    if (results.rowCount === 0) {
      throw new ExpressError(`Invalid company code: ${code}.`, 404);
    }
    return res.json({ msg: `Company with code '${code}' deleted.` });
  } catch (e) {
    return next(e);
  }
});

module.exports = router;
