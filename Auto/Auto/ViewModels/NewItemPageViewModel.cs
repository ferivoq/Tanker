using Auto.Models;
using Auto.Services;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Input;
using Xamarin.Forms;

namespace Auto.ViewModels
{
    public class NewItemPageViewModel : BaseViewModel
    {
        public Item NewItem { get; set; }

        public INavigation Navigation;
        public ICommand SaveClicked { get; set; }

        public ICommand CancelClicked { get; set; }

        public NewItemPageViewModel()
        {
            SaveClicked = new Command(async () => await ExecuteSaveClicked());
            CancelClicked = new Command(async () => await ExecuteCancelClicked());
            NewItem = new Item()
            {
                Amount = 10,
                Date = DateTime.Today,
                Mileage = 1000,
                Price = 400
            };
        }

        async Task ExecuteSaveClicked()
        {
            await db.data.AddItemAsync(NewItem);
            await Navigation.PopModalAsync();
        }

        async Task ExecuteCancelClicked()
        {
            await Navigation.PopModalAsync();
        }
    }
}
