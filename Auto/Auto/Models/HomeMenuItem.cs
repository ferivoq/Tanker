using System;
using System.Collections.Generic;
using System.Text;

namespace Auto.Models
{
    public enum MenuItemType
    {
        Browse,
        About,
        Statistics
    }
    public class HomeMenuItem
    {
        public MenuItemType Id { get; set; }

        public string Title { get; set; }
    }
}
