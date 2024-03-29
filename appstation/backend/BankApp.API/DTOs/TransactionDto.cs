﻿using System;

namespace BankApp.API.DTOs
{
    public class TransactionDto
    {
        public int TransactionId { get; set; }
        public DateTime Date { get; set; }
        public decimal Amount { get; set; }
        public string Type { get; set; }
    }
}