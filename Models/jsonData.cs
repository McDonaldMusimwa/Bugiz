namespace Bugiz.Models
{
    public class jsonData
    {
        public string Head { get; set; }
        public string Description { get; set; }
        public string Image {  get; set; }
    }

    public class PricingData
    {
        public IList<jsonData> pricingdata { get; set; }
    }
}
