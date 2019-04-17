using System;
using System.Collections.ObjectModel;
using System.Diagnostics;
using System.Threading.Tasks;

using Xamarin.Forms;

using Auto.Models;
using Auto.Views;
using System.Collections.Generic;
using System.Linq;
using Auto.Services;

namespace Auto.ViewModels
{
    public class ItemsViewModel : BaseViewModel
    {
        public ObservableCollection<Item> Items { get; set; }
        public Command LoadItemsCommand { get; set; }

        public ItemsViewModel()
        {
            Items = new ObservableCollection<Item>();
            Title = "Browse";
            LoadItemsCommand = new Command(async () => await ExecuteLoadItemsCommand());
        }

        public async Task ExecuteLoadItemsCommand()
        {
            if (IsBusy)
                return;

            IsBusy = true;

            try
            {
                Items.Clear();
                IEnumerable<Item> items = await db.data.GetItemsAsync();
                items = items.OrderByDescending(o => o.Date);
                foreach (var item in items)
                {
                    Items.Add(item);
                }
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex);
            }
            finally
            {
                IsBusy = false;
            }
        }
    }
}