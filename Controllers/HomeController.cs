using Bugiz.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Diagnostics;

namespace Bugiz.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            // Get absolute path for the Pricing.json file in the project root
            string filePath = Path.Combine(Directory.GetCurrentDirectory(), "Data", "Pricing.json");

            // Log the file path for debugging
            Console.WriteLine($"Looking for file at: {filePath}");

            if (!System.IO.File.Exists(filePath))
            {
                _logger.LogError("Pricing.json file not found at {FilePath}", filePath);
                return View(null); // Handle missing file case
            }

            try
            {
                // Read JSON file content
                string jsonData = System.IO.File.ReadAllText(filePath);

                // Deserialize JSON into PricingData model
                var pricing = JsonConvert.DeserializeObject<PricingData>(jsonData);

                // Log the deserialized data for debugging
                Console.WriteLine($"Pricing Data Loaded: {JsonConvert.SerializeObject(pricing, Formatting.Indented)}");

                return View(pricing); // Pass the model to the view
            }
            catch (Exception ex)
            {
                _logger.LogError("Error reading Pricing.json: {ErrorMessage}", ex.Message);
                return View(null);
            }
        }




        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        
    }
}
