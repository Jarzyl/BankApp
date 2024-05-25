using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace BankApp.API.Entities
{
    [Table("Transactions")]
    public class Transaction
    {
        public int TransactionId { get; set; }
        public DateTime Date { get; set; } = DateTime.UtcNow;
        public decimal Amount { get; set; }

        [JsonConverter(typeof(JsonStringEnumConverter))]
        public TransactionType Type { get; set; }
        public int AppUserId { get; set; }
        public AppUser AppUser { get; set; }
        public enum TransactionType
        {
            Deposit,
            Withdrawal,
            Transfer
        }
    }
}
