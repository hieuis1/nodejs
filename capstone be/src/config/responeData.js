export const response = (code, res, mess, data) => {
  res.status(code).send({ content: data, mess, date: new Date() });
};
