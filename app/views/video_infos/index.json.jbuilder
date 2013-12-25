json.array!(@video_infos) do |video_info|
  json.extract! video_info, :id, :video_name, :number_of_milliseconds
  json.url video_info_url(video_info, format: :json)
end
