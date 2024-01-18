using BankApp.API.Entities;

namespace BankApp.API.Interfaces;

public interface ITokenService
{
    string CreateToken(AppUser user);
}
