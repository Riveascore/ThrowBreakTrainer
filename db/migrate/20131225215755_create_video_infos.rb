class CreateVideoInfos < ActiveRecord::Migration
  def change
    create_table :video_infos do |t|
      t.string :video_name
      t.integer :number_of_milliseconds

      t.timestamps
    end
  end
end
