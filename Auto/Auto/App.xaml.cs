using System;
using Xamarin.Forms;
using Xamarin.Forms.Xaml;
using Auto.Services;
using Auto.Views;
using Auto.Models;

namespace Auto
{
    public partial class App : Application
    {

        public App(IItemsRepository itemsRepository)
        {
            db.data = itemsRepository;
            InitializeComponent();
            MainPage = new MainPage();
        }

        protected override void OnStart()
        {
            // Handle when your app starts
        }

        protected override void OnSleep()
        {
            // Handle when your app sleeps
        }

        protected override void OnResume()
        {
            // Handle when your app resumes
        }
    }
}
