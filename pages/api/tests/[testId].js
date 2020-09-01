export default (req, res) => {
  const {
    query: { testId },
  } = req

  res.status(200).json({ result: testId })
}