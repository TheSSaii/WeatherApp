export async function getWeather(req, res) {
  try {
    const { city, country } = req.query;

    const data = await weatherService(city, country);

    res.json(data);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}