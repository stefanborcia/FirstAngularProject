using System.ComponentModel.DataAnnotations;

namespace FirstAngularProject.Dtos
{
    public record Passenger(
       [Required][EmailAddress] string Email,
       [Required][MinLength(3)][MaxLength(15)] string FirstName,
       [Required][MinLength(3)][MaxLength(15)] string LastName,
       [Required] bool Gender
        );
}
