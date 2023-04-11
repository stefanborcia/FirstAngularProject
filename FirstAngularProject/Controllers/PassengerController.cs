using FirstAngularProject.Dtos;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FirstAngularProject.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class PassengerController : ControllerBase
    {
        [HttpPost]
        [ProducesResponseType(201)] //created
        [ProducesResponseType(400)]
        [ProducesResponseType(500)]
        public IActionResult Register(NewPassengerDto dto)  // Http post EndPoint
        {
            throw new NotImplementedException();
        }
    }
}