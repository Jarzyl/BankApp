using AutoMapper;
using BankApp.API.DTOs;
using BankApp.API.Entities;
using BankApp.API.Extensions;

namespace BankApp.API.Helpers
{
    public class AutoMapperProfiles: Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<AppUser, MemberDto>()
                .ForMember(dest => dest.Age, opt => opt.MapFrom(src => src.DateOfBirth.CalculateAge()));
            CreateMap<Transaction, TransactionDto>();
        }
    }
}
