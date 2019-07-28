using Microsoft.AspNetCore.Mvc;

namespace LohiWeb
{
    public class SpaIndexController : Controller {
        public IActionResult Index() {
            return View();
        }
    }
}
