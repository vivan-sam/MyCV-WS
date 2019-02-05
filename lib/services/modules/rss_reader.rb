require 'open-uri'
require 'open_uri_redirections'

module RssReader
  def fetch_rss(url, source)
    ap "url: #{url} source: #{source}"
    open(url, :allow_redirections => :all) do |rss|
      adapt(RSS::Parser.parse(rss), source)
    end
  end

  def adapt(feed, source)
    [].tap do |items|
      feed.items.each do |item|
        description = ActionView::Base.full_sanitizer.sanitize(item.description)
        items.push(Job.new(item.title, description, item.link, source))
      end
    end
  end
end