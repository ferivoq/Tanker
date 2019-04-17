using System;

using Auto.Models;

namespace Auto.ViewModels
{
    public class ItemDetailViewModel : BaseViewModel
    {
        public Item Item { get; set; }
        public ItemDetailViewModel(Item item = null)
        {
            Title = item.Date.ToShortDateString();
            Item = item;
        }
    }
}
