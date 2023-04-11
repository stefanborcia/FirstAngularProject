﻿using FirstAngularProject.Dtos;
using FirstAngularProject.ReadModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FirstAngularProject.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class PassengerController : ControllerBase
    {
        static private IList<NewPassengerDto> Passengers = new List<NewPassengerDto>();


        [HttpPost]
        [ProducesResponseType(201)] //created
        [ProducesResponseType(400)]
        [ProducesResponseType(500)]
        public IActionResult Register(NewPassengerDto dto)  // Http post EndPoint
        {
            Passengers.Add(dto);
            System.Diagnostics.Debug.WriteLine(Passengers.Count);
            return CreatedAtAction(nameof(Find), new{email =dto.Email});
        }

        [HttpGet("{email}")]
        public ActionResult<PassengerRm> Find(string email)
        {
            var passenger = Passengers.FirstOrDefault(p => p.Email == email);

            if (passenger == null)
            {
                return NotFound();
            }

            var rm= new PassengerRm(
                passenger.Email,
                passenger.FirstName,
                passenger.LastName,
                passenger.Gender
                );

            return Ok(rm);
        }
    }
}