using FirstAngularProject.Domain.Entities;
using System;

namespace FirstAngularProject.Data
{
    public class Entities
    {
         public IList<Passenger> Passengers = new List<Passenger>();

         static Random random = new Random();

         public List<Flight> Flights = new List<Flight>();
    }
}
