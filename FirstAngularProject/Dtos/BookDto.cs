using System.ComponentModel.DataAnnotations;

namespace FirstAngularProject.Dtos
{
    public record BookDto(
        [Required]Guid FlightId,
        [Required][EmailAddress] string PassengerEmail,
        [Required][Range(1,255)] byte numberOfSeates);

}
