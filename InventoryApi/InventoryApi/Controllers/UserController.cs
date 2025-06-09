using Microsoft.AspNetCore.Mvc;

namespace InventoryApi.Controllers
{
    public class UserController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
