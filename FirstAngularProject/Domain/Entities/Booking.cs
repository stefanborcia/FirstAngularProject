
namespace FirstAngularProject.Domain.Entities
{
    public record Booking(
        Guid FlightId,
        string PassengerEmail,
        byte numberOfSeates);

}
